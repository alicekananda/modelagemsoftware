import * as React from 'react';
import { Button, TextInput, StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function Signup() {
    const [fullName, onChangeFullName] = React.useState("");
    const [email, onChangeEmail] = React.useState("");
    const [password, onChangePassowrd] = React.useState("");

    function handleSignin() {
        console.log('hello world signin')

    }

    return (
        <View style={styles.container} lightColor="#FFF">
            <TextInput
                style={styles.input}
                onChangeText={onChangeFullName}
                value={fullName}
                placeholder="Insira seu nome completo"
            />
            <TextInput
                style={styles.input}
                onChangeText={onChangeEmail}
                value={email}
                autoCompleteType="email"
                placeholder="Insira seu e-mail"
            />
            <TextInput
                style={styles.input}
                onChangeText={onChangePassowrd}
                value={password}
                autoCompleteType="password"
                placeholder="Senha"
            />
            <Button
                onPress={handleSignin}
                title="Cadastre-se"
                color="#841584"
                accessibilityLabel="Cadastrar"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',
        height: '100%',
        padding: 24,
    },
    input: {
        height: 40,
        marginBottom: 8,
        marginTop: 8,
        borderWidth: 1,
        padding: 4,
        borderRadius: 4,
    },
});
