import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom'
import Section from '../';

const INITIAL_PROPS: any = {
    children: <></>
};

const setup = (newProps?: any) => (
    <Section {...{...INITIAL_PROPS, ...newProps}} />
);

describe('Section Unitary Tests', () => {
    afterEach(() => {
        cleanup();
    });

    it('Renders Section and Children', async () => {
        const mockChildren = <div>I'm alive!</div>;
        const { container } = render(setup({ children: mockChildren }));
        expect(container).toBeDefined();
        expect(container).toHaveTextContent(`I'm alive!`);
    });
});