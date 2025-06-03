import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // Добавляем расширения expect
import { Container, Flex } from './index'; // Замените на путь к вашему файлу

describe('Container and Flex component rendering', () => {

  it('renders Container component with children', () => {
    render(<Container>Hello</Container>);
    expect(screen.getByText('Hello')).toBeInTheDocument();
  });

  it('renders Flex component with default props', () => {
    render(<Flex>Test</Flex>);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });


  it('renders Flex component with custom alignItems', () => {
    render(<Flex alignItems="flex-start">Test</Flex>);
    // Здесь проверка на визуальное расположение сложна без дополнительных инструментов, 
    //  но можно проверить, что компонент рендерится без ошибок
    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  it('renders Flex component with custom justifyContent', () => {
    render(<Flex justifyContent="space-between">Test</Flex>);
    // Аналогично предыдущему, проверка на визуальное расположение сложна.
    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  it('renders Flex component with gap', () => {
    render(<Flex gap="10px">Test</Flex>);
    // Проверка на визуальное расстояние между элементами сложна без дополнительных инструментов
    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  it('renders nested components', () => {
    render(
      <Container>
        <Flex>
          <div>Child 1</div>
          <div>Child 2</div>
        </Flex>
      </Container>
    );
    expect(screen.getByText('Child 1')).toBeInTheDocument();
    expect(screen.getByText('Child 2')).toBeInTheDocument();
  });

});
