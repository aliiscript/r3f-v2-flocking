import type { NextPage } from "next";
import styled from "styled-components";
import { useControls } from "leva";
import CanvasLayout from "../components/layout/CanvasLayout";
import DomLayout from "../components/layout/DomLayout";

// dom components go here
const DOM = () => {
    return (
        <DomLayout>
            
        </DomLayout>
    );
};

// canvas components go here
const R3F = () => {
    const { color, hoverColor } = useControls({
        color: "#c1b61f",
        hoverColor: "#2d52ad",
    });

    return (
        <CanvasLayout>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            
        </CanvasLayout>
    );
};

const Home: NextPage = () => {
    return (
        <>
            <DOM />
            <R3F />
        </>
    );
};

export default Home;
