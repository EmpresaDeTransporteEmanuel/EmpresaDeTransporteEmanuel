import React, { useState, useMemo, useContext} from 'react'

const UserContext = React.createContext()

export function UserProvider ({ children }) {

	const [user, setUser] = useState(undefined)
	const [userDB, setUserDB] = useState('loading')
	const [specificData, setSpecificData] = useState(null)


	function setUserProfile (userProfile) {
		setUser(userProfile)
	}
	function setUserData (userDatabase) {
		setUserDB(userDatabase)
	}
	function setUserSpecificData (userSpecificData) {
		setSpecificData(userSpecificData)
	}

	const value = useMemo(()=>{
		return ({
			user,
			userDB,
			specificData,
			setUserProfile,
			setUserData,
			setUserSpecificData,
		})
	}, [ user, userDB, specificData ])

	return (
		<UserContext.Provider value={value} >
			{ children }
		</UserContext.Provider>
	)
} 

export function useUser () {
	const context = useContext(UserContext)
	if(!context){
		throw new Error('error')
	}
	return context
}