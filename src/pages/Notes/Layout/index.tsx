import React from "react";
import { LayoutWrapper } from "./styles";
import { LayoutProps } from "./types";
import PageContent from "../../../components/PageContent";
import Section from "../../../shared/Section";
import SendIcon from '@mui/icons-material/Send';
import StyledButton from '../../../shared/StyledButton'
import TextInputField from '../../../components/TextInputField';


const Layout = ({
    enableNoteCreator
}: LayoutProps): JSX.Element => {

  const isLoading = false  ;
    return (
        <LayoutWrapper>
            <PageContent>
                <>
                    {enableNoteCreator && <Section isLoading={isLoading} title={"Notes"} >
                        <div>
                            <TextInputField  isLoading={isLoading} />
                            <StyledButton isLoading={isLoading} text="button" icon={<SendIcon />} onClick={()=> console.log("click")}/>
                        </div>
                        </Section>}
                </>
            </PageContent>
           
        </LayoutWrapper>
    );
}




export default Layout;