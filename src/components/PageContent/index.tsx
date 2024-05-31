import { PageContentProps } from './types';
import { PageContentWrapper } from './styles';
import useMediaQuery from '../../hooks/useMediaQuery';

const PageContent = ({ children }: PageContentProps): JSX.Element => {
    const isMobile = useMediaQuery(768);
    return (<PageContentWrapper mobile={isMobile}> {children} </PageContentWrapper>);
};

export default PageContent; 