// Vaga.styles.ts
import styled from 'styled-components'

export const Item = styled.li`
    border: 1px solid #a1a1a1;
    padding: 16px;
    margin-bottom: 24px;
    border-radius: 8px;
`

export const Titulo = styled.h3`
    margin: 0;
    margin-bottom: 16px;
    font-size: 18px;
`

export const Link = styled.a`
    display: inline-block;
    margin-top: 16px;
    text-decoration: none;
    color: #fff;
    background-color: #007bff;
    padding: 8px 16px;
    border-radius: 4px;

    &:hover {
        background-color: #0056b3;
    }
`
