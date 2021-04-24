import styled from 'styled-components';
import { StyleSheet } from 'react-native';

export const Span = styled.View`
    width: 100%;
    background-color: #e5195f;
    border: 0;
    border-radius: 35px;
    padding: 6px 0;
    align-items: center;
    justify-content: center;
`;

export const Arrow = styled.View`    
    background-color: #e5195f;
    border: 0;
    border-radius: 35px;
    align-items: center;
    justify-content: center;
`;


export const Title = styled.Text`
	font-size: 24px;
	font-weight: 500;
	color: white;
`;

export const PokeName = styled.Text`
    font-family: inherit;
    font-size: 16px;
    font-weight: 700;
    color: #fff;
`;

export const TextDetail = styled.Text`
    font-size: 22px;
    margin-bottom: 15px;
`;

export const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginTop: 30,
    },
    card: {
        display: 'flex',
        alignItems: 'center',
        marginHorizontal: 20,
        marginVertical: 10,
    },
    searchCont: {
        position: 'absolute',
        marginBottom: 70,
        left: '20%',
        zIndex: 1,
        marginTop: 10,
    },
    searchField: {
        flex: 1,
        flexDirection: 'row',
        height: 40,
        marginBottom: 1,        
        borderColor: '#e5195f',
        textAlign: 'left',
        width: 250,
        borderRadius: 0,
    },
    button: {
        alignItems: "center",
        backgroundColor: "#e5195f",
        padding: 10,
        marginTop: 20,        
    },
});
