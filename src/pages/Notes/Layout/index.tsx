import React from "react";
import { LayoutWrapper } from "./styles";
import { LayoutProps } from "./types";
import PageContent from "../../../components/PageContent";
import Section from "../../../shared/Section";
import Create from "../../../components/Create";


const Layout = ({
    enableNoteCreator
}: LayoutProps): JSX.Element => {

  const isLoading = false  ;
    return (
        <LayoutWrapper>
            <PageContent>
                <>
                    {enableNoteCreator && <Section isLoading={isLoading} title={"Notes"} width='30'><Create isLoading={false} /></Section>}
                    {enableNoteCreator && <Section isLoading={isLoading} title={"Notes"} width='60'><Create isLoading={false} /></Section>}
                </>
            </PageContent>
           
        </LayoutWrapper>
    );
}




export default Layout;