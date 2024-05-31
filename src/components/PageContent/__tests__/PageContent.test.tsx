import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom'
import PageContent from '../';

const INITIAL_PROPS: any = {
    isLoading: false
};

const setup = (newProps?: any) => (
    <PageContent {...{...INITIAL_PROPS, ...newProps}} />
);

describe('PageContent Unitary Tests', () => {
    afterEach(() => {
        cleanup();
    });

    it('Renders PageContent', async () => {
        const { container } = render(setup());
        expect(container).toBeDefined();
    });
});