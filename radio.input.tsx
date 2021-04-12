import React, { useState } from "react";
import styled from "styled-components";

import colors from "../../themes/colors.theme";
import Text from "../style/text.component";
import TextInput from "./text.input";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${colors.dark};
`;

const Label = styled(Text)`
    margin-bottom: 16px;
`;

const Items = styled.div`
    display: flex;
    flex-direction: column;
`;

const Item = styled.label<any>`
    display: flex;
    align-items: center;
    height: 35px;
    cursor: pointer;

    &::before {
        content: "";
        flex: 0 0 auto;
        width: 12px;
        height: 12px;
        margin-right: 10px;
        background-color: ${props => (props.active ? colors.light : colors.dark)};
        border: 1px solid ${colors.light};
        border-radius: 50%;
        transform: translateY(1px);
    }

    @media screen and (max-width: 768px) {
        ${props =>
            props.custom &&
            `
            height: auto;
            margin-top: 6px;

            &::before {
                transform: translateY(-16px);
            }
        `}
    }
`;

const ItemRow = styled.div`
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
    }
`;

const ItemLabel = styled(Text)<any>`
    flex: 0 0 auto;
    ${props => props.custom && "margin-right: 8px;"}
    font-size: 16px;

    @media screen and (max-width: 768px) {
        ${props => props.custom && "margin-bottom: 2px;"}
    }
`;

type RadioInputItemValue = string | number;

type RadioInputItem = {
    value: RadioInputItemValue;
    label: string;
};

type RadioInputProps = {
    label?: string;
    items: RadioInputItem[];
    value?: RadioInputItemValue;
    onChange: (value: RadioInputItemValue, label: string) => void;
    allowCustomValues?: boolean;
    customValueLabel?: string;
    style?: Object;
};

export default (props: RadioInputProps) => {
    const [selectedValue, setSelectedValue] = useState(props?.value);
    const [customValue, setCustomValue] = useState("");

    const onItemClick = item => {
        setSelectedValue(item.value);
        props.onChange(item.value, item.label);
    };

    const onCustomValueChange = text => {
        setSelectedValue("other");
        setCustomValue(text);
        props.onChange("other", text);
    };

    return (
        <Wrapper style={props?.style}>
            {props.label ? <Label>{props.label || ""}</Label> : null}
            <Items>
                {props.items.map((item, index) => (
                    <Item
                        key={index}
                        active={selectedValue === item.value}
                        onClick={() => onItemClick(item)}
                    >
                        <ItemLabel>{item.label}</ItemLabel>
                    </Item>
                ))}
                {props.allowCustomValues ? (
                    <Item
                        custom
                        active={selectedValue === "other"}
                        onClick={() => onItemClick({ value: "other", label: customValue })}
                    >
                        <ItemRow>
                            <ItemLabel custom>{props.customValueLabel || "Other"} : </ItemLabel>
                            <TextInput
                                value={customValue}
                                onChange={onCustomValueChange}
                                style={{ marginBottom: -4 }}
                            />
                        </ItemRow>
                    </Item>
                ) : null}
            </Items>
        </Wrapper>
    );
};
