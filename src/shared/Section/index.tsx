import { SectionProps } from './types';
import { SectionRowWrapper, SectionTitle, SectionTitleWrapper, SectionWrapper } from './styles';
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