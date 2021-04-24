
import React, { useState, useEffect } from 'react';
import { View, Image, ActivityIndicator } from 'react-native';
import { Title, Span, TextDetail } from './styles/styles';
import api from '../services/api';
import {typeColors} from '../helpers/colors';


const Details = props => {
    const [details, setDetails] = useState([]);

    useEffect(() => {
        fetchPokemonDetails();
    }, []);    

    const fetchPokemonDetails = () => {
        const { state } = props.navigation;
        api.get(`pokemon/${state.params.pokemon}`).then(response => {
            setDetails(response.data);
        });           
    };

    return details.name ? (
        <View style={{ flex: 1, alignItems: 'center' }}>
            <Image
                style={{ width: 200, height: 200 }}                              
                source={{
                    uri: `https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/${details.name
                        }.png`,
                }}
            />
            <TextDetail>Name: {details.name}</TextDetail>
            <TextDetail >Height: {details.height}</TextDetail>
            <TextDetail >Weight: {details.weight}</TextDetail>
            <TextDetail>
                Ability: {details.abilities[0].ability.name}
            </TextDetail>
            <Span style={{ backgroundColor: typeColors(details.types[0].type.name), width: '50%' }}><Title>Type: {details.types[0].type.name} </Title></Span>
        </View>
    ) : (
        <View>
            <ActivityIndicator size="large" color="#E63F34" />
        </View>
    );
};

export default Details;
