import styled from 'styled-components';
import { DARK_GRAY, PRIMARY_BLUE } from '../constants/colors';
import { SectionTitleProps, SectionWrapperProps } from './types';

export const SectionWrapper = styled.section<SectionWrapperProps>`
    margin-bottom: 31px;
    width: ${({ width }) => `${width}%`};

`;
export const SectionRowWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
export const SectionTitleWrapper = styled.div`
    display: flex;
    align-items: center;
`;
export const SectionSubTitleWrapper = styled.div`
    display: flex;
    align-items: center;
`;
export const SectionSubTitle = styled.h3`
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 30px;
    margin: 0;
`;
export const SectionTitle = styled.h2<SectionTitleProps>`
    margin: 0;
    font-size: ${({ titleSize }) => `${titleSize}px` || '14px'};
    font-weight: 400;
    line-height: 26px;
    letter-spacing: 0.0025em;
    text-align: left;
    color: ${PRIMARY_BLUE};
`;
export const SectionIcon = styled.div`
    margin: 6px 9.72px 0px -2px;
    color: ${PRIMARY_BLUE};
`;
export const EditSectionTitle = styled.h2`
    margin: 0;
    font-size: 14px;
    font-weight: 400;
    line-height: 26px;
    letter-spacing: 0.0025em;
    text-align: left;
    color: ${DARK_GRAY};
`;

export const EditSectionIcon = styled.div`
    margin: 0 9.72px 0 -2px;
    color: ${DARK_GRAY};
`;