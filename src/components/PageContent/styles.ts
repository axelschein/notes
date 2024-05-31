import styled from 'styled-components';
import { PageContentWrapperProps } from './types';

export const PageContentWrapper = styled.section<PageContentWrapperProps>`
    padding-top: ${({ mobile }) => mobile ? '4em' : '44px'};
    padding-left: ${({ mobile }) => mobile ? '2em' : '9%'};
    padding-right: ${({ mobile }) => mobile ? '2em' : '11%'};
    width: 100%;
    overflow: scroll;
`;
