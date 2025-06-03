import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Container, Flex } from '.';

test('Container компонент рендерится без ошибок', () => {
    render(<Container>Тестовый контент</Container>);
    expect(screen.getByText('Тестовый контент')).toBeInTheDocument();
});

test('Flex компонент рендерится без ошибок', () => {
    render(<Flex>Тестовый контент</Flex>);
    expect(screen.getByText('Тестовый контент')).toBeInTheDocument();
});

test('Flex компонент принимает props', () => {
    render(
        <Flex alignItems="flex-start" justifyContent="space-between" gap="10px">
            <div>Первый элемент</div>
            <div>Второй элемент</div>
        </Flex>
    );
    expect(screen.getByText('Первый элемент')).toBeInTheDocument();
    expect(screen.getByText('Второй элемент')).toBeInTheDocument();
});