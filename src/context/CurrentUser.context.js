import React, { Component } from 'react'

const CurrentUserContext = React.createContext()

export class CurrentUserProvider extends Component {
    state = {
        user: { name: 'Artur' }
    }

    login = () => {
        this.setState({ user: { name: 'Artur' } })
    }

    logout = () => {
        this.setState({ user: null })
    }

    render() {
        const { children } = this.props
        return (
            <CurrentUserContext.Provider
                value={{
                    login: this.login,
                    logout: this.logout,
                    user: this.state.user
                }}
            >
                {children}
            </CurrentUserContext.Provider>
        )
    }
}

export const CurrentUserConsumer = CurrentUserContext.Consumer