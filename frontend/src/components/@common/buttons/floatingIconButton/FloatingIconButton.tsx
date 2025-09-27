import * as S from './FloatingIconButton.styles';

interface FloatingIconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** 아이콘 React Node */
  icon: React.ReactNode;
  /** 버튼 클릭했을 때 실행할 함수*/
  onClick: () => void;
  /** 버튼 라벨 */
  ariaLabel: string;
}

const FloatingIconButton = ({
  icon,
  onClick,
  ariaLabel,
  ...buttonProps
}: FloatingIconButtonProps) => {
  return (
    <S.Wrapper onClick={onClick} aria-label={ariaLabel} {...buttonProps}>
      {icon}
    </S.Wrapper>
  );
};

export default FloatingIconButton;
