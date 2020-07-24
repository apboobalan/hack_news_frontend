import React from 'react'
import {useSelector} from 'react-redux'
import ChallengeList from '../components/challengeList'

const ChallengeListContainer = () => {
    const challengeList = useSelector(state => state.challengeListReducer.challengeList)
    return <ChallengeList challengeList={challengeList} />
}

export default ChallengeListContainer;