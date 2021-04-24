
import React, { useState, useEffect } from 'react';
import { Arrow, Span, PokeName, styles } from './styles/styles';
import api from '../services/api';

import {
    View,
    SafeAreaView,
    ScrollView,
    Image,
    TouchableOpacity,
    TextInput,
    StatusBar
} from 'react-native';


const Pokemons = props => {
    const [pokemons, setPokemons] = useState([]);
    const [searchField, setSearchField] = useState('');
    const [previousPage, setPreviousPage] = useState('');
    const [nextPage, setNextPage] = useState('pokemon');

    useEffect(() => {
        fetchPokemons(nextPage);
    }, []);

    const fetchPokemons = (page) => {
        api.get(page).then(response => {
            setPokemons(response.data.results);
            setPreviousPage(response.data.previous ? response.data.previous : page);
            setNextPage(response.data.next ? response.data.next : page);
        });
    };

    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor="#e5195f" />
            <SafeAreaView>               
                <View style={styles.searchCont}>
                    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly'}}>
                        <TouchableOpacity style={{width: '30%'}} onPress={() => fetchPokemons(previousPage)}>
                            <Arrow><PokeName>{'<'}</PokeName></Arrow>
                        </TouchableOpacity>

                        <TouchableOpacity style={{width: '30%'}} onPress={() => fetchPokemons(nextPage)}>
                            <Arrow><PokeName>{'>'}</PokeName></Arrow>
                        </TouchableOpacity>
                    </View>

                    <TextInput
                        style={styles.searchField}
                        placeholder="Search Pokemons on Current Page"
                        onChangeText={value => setSearchField(value)}
                        value={searchField}
                    />
                </View>
                <ScrollView>
                    <View style={styles.container}>
                        {pokemons
                            .filter(pokemon =>
                                pokemon.name.toLowerCase().includes(searchField.toLowerCase())
                            )
                            .map((pokemon, index) => {
                                return (
                                    <TouchableOpacity
                                        activeOpacity={0.5}
                                        key={index}
                                        style={styles.card}
                                        onPress={() =>
                                            props.navigation.navigate('Details', {
                                                pokemon: pokemon.name,
                                            })
                                        }>
                                        <Image
                                            style={{ width: 150, height: 150 }}
                                            source={{
                                                uri: `https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/${pokemon.name
                                                    }.png`,
                                            }}
                                        />
                                        <Span><PokeName>{pokemon.name}</PokeName></Span>
                                    </TouchableOpacity>
                                );
                            })}
                    </View>

                </ScrollView>
            </SafeAreaView>
        </>
    );
};

export default Pokemons;


