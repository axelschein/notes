import { SectionProps } from './types';
import { SectionRowWrapper, SectionTitle, SectionTitleWrapper, SectionSubTitleWrapper, SectionSubTitle, SectionWrapper } from './styles';
// import Divider from '../Divider';
// import { HiOutlinePencilSquare } from 'react-icons/hi2';
// import RebillButton from '../Button';
// import { DARK_GRAY } from '../constants/colors';
import { SectionTitleSkeleton } from './skeleton';

const Section = ({
    isLoading = false,
    title,
    subTitle,
    titleSize,
    children
}: SectionProps): JSX.Element => {
    const renderSectionTitle = (
        <SectionTitleWrapper>
            <SectionTitle titleSize={titleSize}>
                {title}
            </SectionTitle>
        </SectionTitleWrapper>
    );

    // const renderEditSection = (
    //     editSectionTitle
    //     && (
    //         <SectionTitleWrapper>
    //             <RebillButton
    //                 icon={<HiOutlinePencilSquare size={18} />}
    //                 label={editSectionTitle}
    //                 onClick={() => editSectionCallback && editSectionCallback()}
    //                 fontColor={DARK_GRAY}
    //                 border="none"
    //                 padding='0'
    //                 fontWeight="400"
    //             />
    //         </SectionTitleWrapper>
    //     )
    // );

    const renderChildren = (
        <>{children}</>
    );

    return (<SectionWrapper>
        <>
            <SectionRowWrapper>
                {isLoading ? <SectionTitleSkeleton /> : renderSectionTitle}
                {/* {isLoading ? <SectionUpdateSkeleton /> : renderEditSection} */}
            </SectionRowWrapper>
            {/* <Divider /> */}
            <hr />
            {subTitle && (
                <SectionSubTitleWrapper>
                    <SectionSubTitle>
                        {subTitle}
                    </SectionSubTitle>
                </SectionSubTitleWrapper>
            )}
            {isLoading ? <SectionTitleSkeleton /> : renderChildren}
        </>
    </SectionWrapper>)
};

export default Section;