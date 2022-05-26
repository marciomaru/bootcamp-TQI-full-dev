// import { string } from 'prop-types';

// export const Button = ({ children }) => {
//     return <button>{children}</button>;
// }

// Button.prototype = {
//     children: string,
// }

import styled from 'styled-components';

export const Button = styled.button`
    background: #DC872C;
    color: #fff;
    border: none;
    border-radius:0;
    font-size: 1.5em;
    padding: 10px 20px;
    cursor: pointer;
    box-shadow: #333 3px 3px;

    &:hover{
        background: #a40000;
    }
`;