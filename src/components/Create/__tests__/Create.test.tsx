import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom'
import Create from '../';

const INITIAL_PROPS: any = {
    isLoading: false
};

const setup = (newProps?: any) => (
    <Create {...{...INITIAL_PROPS, ...newProps}} />
);

describe('Create Unitary Tests', () => {
    afterEach(() => {
        cleanup();
    });

    it('Renders Create', async () => {
        const { container } = render(setup());
        expect(container).toBeDefined();
    });
});