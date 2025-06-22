import styled from 'styled-components'

export const Form = styled.form`
    display: flex;
    gap: 16px;
    margin-bottom: 40px;
`

export const Campo = styled.input`
    flex: 1;
    padding: 8px;
    font-size: 14px;
    border: 1px solid #ddd;
    border-radius: 8px;
`

export const BotaoPesquisar = styled.button`
    background-color: #a7727d;
    color: #fff;
    font-weight: bold;
    font-size: 14px;
    padding: 8px 16px;
    border-radius: 8px;
    border: none;
    cursor: pointer;

    &:hover {
        background-color: #915f6d;
    }
    `



