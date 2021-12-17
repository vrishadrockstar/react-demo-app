import React from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types';

const Item = styled.li`
    border-bottom: 1px #d1d1d1 solid;
    border-right: 1px #d1d1d1 solid;
    border-left: 1px #d1d1d1 solid;
    &:first-child{
        border-top: 1px #d1d1d1 solid;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
    }
    &:last-child {
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
    }
    padding: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Text = styled.span`
    position: relative;
    font-family: 'Caveat', cursive;
    font-size: 24px;
    color: #343a48;
    transition: position 0.8 ease-out;
`
const DelButton = styled.button`
    font-size: 18px;
    font-weight: 700;
    color: #adadad;
    padding: 5px;
    background-color: transparent;
    border: 0;
    appearance: none;
    outline: unset;
    transition: transform .8s;
    &:hover{
        color: #c75656;
        transform: rotate(180deg);
    }
`


const RemovableListItem = (props) => { 
    const {id, text, removeItem}  = props;
    return(
        <Item>
           <Text>{text}</Text>
           { (removeItem && id) && 
            <DelButton onClick={() => removeItem(id)}>X</DelButton>
            }      
        </Item>
    )
}

RemovableListItem.propTypes = {
    /**
     * The items's ID
     */
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    /**
     * The item's text
     */
    text: PropTypes.string.isRequired,
    /**
     * A callback to be exectuted on a remove-item event
     */
    removeItem: PropTypes.func
}

export default RemovableListItem;