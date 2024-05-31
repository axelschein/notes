import { SectionProps } from './types';
import { SectionRowWrapper, SectionTitle, SectionTitleWrapper, SectionWrapper } from './styles';
// import Divider from '../Divider';
// import { HiOutlinePencilSquare } from 'react-icons/hi2';
// import RebillButton from '../Button';
// import { DARK_GRAY } from '../constants/colors';
import { SectionTitleSkeleton } from './skeleton';

const Section = ({
    isLoading = false,
    title,
    titleSize,
    children,
    width
}: SectionProps): JSX.Element => {
    const renderSectionTitle = (
        <SectionTitleWrapper>
            <SectionTitle titleSize={titleSize}>
                {title}
            </SectionTitle>
        </SectionTitleWrapper>
    );

    
    const renderChildren = (
        <>{children}</>
    );

    return (
        <SectionWrapper width={width}>
            <SectionRowWrapper>
                {isLoading ? <SectionTitleSkeleton /> : renderSectionTitle}
            </SectionRowWrapper>
            < br />            
            {isLoading ? <SectionTitleSkeleton /> : renderChildren}
            <br />            
        </SectionWrapper>
    )
};

export default Section;