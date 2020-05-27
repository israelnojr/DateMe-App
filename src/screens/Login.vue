<template>
   <SafeAreaView class="container">
       <StatusBar barStyle="light-content" />
        <view class="container">
            <view class="loginContainer">
                <image class="logo"
                    :source="require('../../assets/splash.png')"
                />
                <text class="text">Account Information</text>
            </view>
            <view class="infoContainer">
                <text-input class="input" v-model="email"
                    placeholder="Enter username/email" 
                    placeholderTextColor="rgba(255,255,255,0.8)"
                    keyboardType="email-address"
                    returnKeyType="next" 
                    v-on:keyup.enter="FocusOnNextInput()"
                />
                <text-input class="input" v-model="password"
                    placeholder="Enter password" 
                    placeholderTextColor="rgba(255,255,255,0.8)"
                    keyboardType="password"
                    returnKeyType="go"
                    secureTextEntry
                />
                <touchable-opacity class="buttonContainer" :on-press="processLogin">
                    <text class="btntxt">Sign In</text>     
                </touchable-opacity>
            </view>
        </view>
   </SafeAreaView>
</template>

<script>
import { Toast } from 'native-base'
export default{
        props: {
        navigation: {
        type: Object
        }
    },
    data: () => {
        return {
            email: '',
            password: ''
        };
    },
    methods:{
        FocusOnNextInput(){
            this.password.focus
        },
        processLogin(){
            if(this.email.trim() == ''){
                Toast.show({
                    text: 'Email field is required',
                    buttonText: 'Okay'
                })
                return
            }
            if(this.password.trim() == ''){
                Toast.show({
                    text: 'Password field is required',
                    buttonText: 'Okay'
                })
                return
            }
            this.navigation.navigate("DateMe");
        }
    }
}
</script>

<style>
    .container {
        flex: 1;
        background-color: rgb(32, 53, 70);
        flex-direction: column;
    }
    .loginContainer {
        align-items: center;
        flex: 1;
        margin-top: 19px;
    }
    .logo {
        width: 128px;
        height: 56px;
    }
    .text{
        color: #f7c744;
        font-size: 18px;
        text-align: center;
    }
    .infoContainer{
        position: absolute;
        left: 0;
        right: 0;
        bottom: 40;
        height: 200px;
        padding: 20px;
        /* background-color: red; */
    }
    .input{
        height: 40px;
        background-color: rgba(255,255,255,0.2);
        color: #fff;
        padding-left: 10px;
        padding-right: 10px;
        margin-bottom: 20px;
    }
    .buttonContainer{
        background-color: #f7c744;
        padding-top: 15px;
        padding-bottom: 15px;
    }
    .btntxt{
        text-transform: uppercase;
        text-align: center;
        color: rgb(32, 53, 70);
        font-size: 18px;
    }
</style>
