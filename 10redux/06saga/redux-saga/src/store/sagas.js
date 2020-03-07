import { takeEvery, put } from 'redux-saga/effects'
import { GET_MYLIST } from './actionType'
import axios from 'axios'
import { getListAction } from './actionFactory';

function* mySaga() {
    yield takeEvery(GET_MYLIST, getList)
}

function* getList(action) {
    // 可以从action中获取到ajax参数
   /*  axios
        .get('https://72074a10-cbed-4f90-98ae-2beb0bbef5e0.mock.pstmn.io/todos')
        .then((res) => {
            const data = 
            const action = getListAction(data)
            // saga 的方法，把action
            put(action)
        }) */
    const res = yield axios.get('https://72074a10-cbed-4f90-98ae-2beb0bbef5e0.mock.pstmn.io/todos')
    yield put(getListAction(res.data.data.list))
}

export default mySaga