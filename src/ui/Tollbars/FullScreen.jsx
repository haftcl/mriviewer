/*
 * Copyright 2021 EPAM Systems, Inc. (https://www.epam.com/)
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";

import { Container } from "./Container";
import { UIButton } from "../Button/Button";
import { Tooltip } from "../Tooltip/Tooltip";


const FullScreen = ({ isFullMode, handler }) => {
    return (
        <Container>
            <Tooltip content={`${isFullMode ? "Exit" : "Go to"} fullscreen mode`}>
                <UIButton
                    icon= { isFullMode ? "collapse" : "expand" }
                    handler={ handler }
                    active={ isFullMode }
                />
            </Tooltip>
        </Container>
    );
};

export default FullScreen;