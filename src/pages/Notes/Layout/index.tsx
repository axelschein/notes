import React from "react";
import { LayoutWrapper } from "./styles";
import { LayoutProps } from "./types";
import PageContent from "../../../components/PageContent";
import Section from "../../../shared/Section";
import Create from "../../../components/Create";
import NotesList from "../../../components/NotesList";


const MOCK_DATA = [
    { id: '1', text: 'texto 1' },
    { id: '2', text: 'texto 2' },
    { id: '3', text: 'texto 3' }
]

const Layout = ({
    enableNoteCreator
}: LayoutProps): JSX.Element => {

  const isLoading = false  ;
    return (
        <LayoutWrapper>
            <PageContent>
                <>
                    {enableNoteCreator && <Section isLoading={isLoading} title={"Notes"} width='30'><Create isLoading={false} /></Section>}
                    {enableNoteCreator && <Section isLoading={isLoading} title={"Notes Created"} width='60'><NotesList isLoading={false} data={MOCK_DATA} /></Section>}
                </>
            </PageContent>
           
        </LayoutWrapper>
    );
}




export default Layout;