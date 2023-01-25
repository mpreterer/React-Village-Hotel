import { FC, useCallback, useEffect, useRef, useState } from 'react';
import classnames from 'classnames';

import { useAppSelector } from '../../hooks/redux';
import throttle from '../../shared/helpers/throttle/throttle';
import CheckBox from '../CheckBox/CheckBox';

import './CheckList.scss';

type TProps = {
  type: 'expandable' | 'rich' | 'buttons';
};

const CheckList: FC<TProps> = ({ type }) => {
  const WINDOW_SIZE_LIMIT = 768;
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [isTemporaryToggleable, setIsTemporaryToggleable] =
    useState<boolean>(false);

  const checkListItems = useAppSelector((state) => state.checkList[type]);
  const { labelName, isToggleable, isRich, listItems } = checkListItems;

  useEffect(() => {
    const handleWindowResize = () => {
      if (!isToggleable) {
        setIsTemporaryToggleable(window.innerWidth < WINDOW_SIZE_LIMIT);
      }
    };

    const throttledHandleWindowResize = throttle(handleWindowResize, 250);
    window.addEventListener('resize', throttledHandleWindowResize);

    return () => window.removeEventListener('resize', handleWindowResize);
  }, [isToggleable]);

  const ref = useRef<HTMLFieldSetElement>(null);

  useEffect(() => {
    const handleDocumentClick = (event: PointerEvent) => {
      const targetElement = event.target;
      const currentInstance = ref.current;
      if (!(targetElement instanceof Node) || !currentInstance) {
        return;
      }
      if (currentInstance.contains(targetElement)) {
        return;
      }
      setIsExpanded(false);
    };

    document.addEventListener('pointerdown', handleDocumentClick);
    return () =>
      document.removeEventListener('pointerdown', handleDocumentClick);
  }, []);

  const handleButtonClick = useCallback(() => {
    if (isToggleable || isTemporaryToggleable) {
      setIsExpanded(!isExpanded);
    }
  }, [isExpanded, isTemporaryToggleable, isToggleable]);

  let list = null;
  if (listItems.length) {
    list = listItems.map((value) => {
      const { label, description, isChecked, name, id } = value;
      return (
        <CheckBox
          key={id}
          isRich={isRich}
          label={label}
          name={name}
          description={description}
          isChecked={isChecked}
        />
      );
    });
  }

  return (
    <fieldset
      className={classnames('check-list', {
        'check-list_expanded': isExpanded,
        'check-list_toggleable': isToggleable,
        'check-list_temporary-toggleable': isTemporaryToggleable,
      })}
      ref={ref}
    >
      <legend className="check-list__legend">
        <button
          type="button"
          className="check-list__label"
          tabIndex={isToggleable || isTemporaryToggleable ? 0 : -1}
          onClick={handleButtonClick}
        >
          {labelName}
        </button>
      </legend>
      {list && <ul className="check-list__list-wrapper">{list}</ul>}
    </fieldset>
  );
};

export default CheckList;
