import { SafeAreaView, StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import React from 'react'
import { useGlobalContext } from '@/lib/global-provider'
import { Redirect, Slot } from 'expo-router'

export default function AppLayout() {
    const { loading, isLoggedIn } = useGlobalContext()
    
    if (loading) {
        return (
            <SafeAreaView className='bg-white h-full flex justify-center items-center'>
                <ActivityIndicator size='large' className='text-primary-300' />
            </SafeAreaView>
        )
    }

    if (!isLoggedIn) return <Redirect href='/sign-in' />
    return <Slot />
}

const styles = StyleSheet.create({})