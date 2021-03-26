import React, { useState } from "react";

import Container from "../../components/style/container.component";
import Content from "../../components/style/content.component";
import Text from "../../components/style/text.component";
import RadioInput from "../../components/forms/radio.input";

const HomeScreen = () => {
    const Technologies = [
        { value: "reactjs", label: "React.js" },
        { value: "reactnative", label: "React Native" },
        { value: "nestjs", label: "NestJS" },
        { value: "mysql", label: "MySQL" },
    ];

    const [technology, setTechnology] = useState(null);

    return (
        <Container>
            <Content
                style={{
                    width: "100%",
                }}
            >
                <RadioInput
                    label="Select a technology"
                    items={Technologies}
                    value={technology}
                    onChange={(value, label) => setTechnology(label)}
                    allowCustomValues
                    customValueLabel="Other, please specify"
                    style={{
                        width: "100%",
                    }}
                />
                {technology ? (
                    <Text
                        style={{
                            marginTop: 20,
                        }}
                    >
                        Current technology : {technology}
                    </Text>
                ) : null}
            </Content>
        </Container>
    );
};

export default HomeScreen;
