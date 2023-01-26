import { ArrowLeftOutlined } from '@ant-design/icons';
import { ComponentProps, ReactElement, ReactNode } from 'react';
import { Avatar } from '../Avatar';
import { Breadcrumb, BreadcrumbProps } from '../Breadcrumb';
import { Space } from '../Space';
import { styled } from '../stitches.config';

const StyledPageHeader = styled('div', {
  boxSizing: 'border-box',
  fontFamily: '$untitled',
  padding: '16px 24px',
});

const StyledHeading = styled(Space, {
  minHeight: 32,
});
const StyledHeadingTitle = styled('span', {
  fontSize: '$4',
  fontWeight: '500',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  mr: '$2',
});
const StyledHeadingSubtitle = styled('span', {
  fontSize: '$2',
  color: '$gray10',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  mr: '$2',
});
const StyledHeadingExtra = styled('div', {
  whiteSpace: 'nowrap',
});

const StyledPageHeaderBack = styled('div', {
  fontSize: '$3',
  mr: '$2',
});
const StyledPageHeaderBackButton = styled('div', {
  fontSize: '$3',
  display: 'inline-block',
  background: 'transparent',
  cursor: 'pointer',
});

const StyledPageHeaderAvatar = styled(Avatar, {
  mr: '$2',
});

const StyledPageHeaderContent = styled('div', {
  pt: '$2',
});

type PageHeaderOwnProps = {
  title?: ReactNode;
  subtitle?: ReactNode;
  extra?: ReactNode;
  onBack?: () => void;
  backIcon?: ReactNode;
  breadcrumb?: BreadcrumbProps;
  avatar?: ComponentProps<typeof Avatar>;
};

export type PageHeaderProps = ComponentProps<typeof StyledPageHeader>;

export type PageHeaderComponent = (
  props: PageHeaderOwnProps & PageHeaderProps
) => ReactElement;

export const PageHeader: PageHeaderComponent = ({
  children,
  title,
  subtitle,
  extra,
  onBack,
  backIcon,
  breadcrumb,
  avatar,
  ...props
}) => (
  <StyledPageHeader {...props}>
    {breadcrumb ? <Breadcrumb {...breadcrumb} /> : null}
    <StyledHeading
      justify="space-between"
      align="center"
      wrap="wrap"
      gap="$1"
      css={{
        mt: breadcrumb ? '$2' : undefined,
      }}
    >
      <Space align="center">
        {onBack ? (
          <StyledPageHeaderBack>
            <StyledPageHeaderBackButton role="button" onClick={onBack}>
              {backIcon ?? <ArrowLeftOutlined />}
            </StyledPageHeaderBackButton>
          </StyledPageHeaderBack>
        ) : null}
        {avatar ? <StyledPageHeaderAvatar size="3" {...avatar} /> : null}
        <StyledHeadingTitle>{title}</StyledHeadingTitle>
        <StyledHeadingSubtitle>{subtitle}</StyledHeadingSubtitle>
      </Space>
      {extra ? <StyledHeadingExtra>{extra}</StyledHeadingExtra> : null}
    </StyledHeading>
    {children ? (
      <StyledPageHeaderContent>{children}</StyledPageHeaderContent>
    ) : null}
  </StyledPageHeader>
);
