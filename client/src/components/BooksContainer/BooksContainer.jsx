import React, { useState } from 'react'
import API from '../../utils/API'

function BookContainer() {

    const [result, setResult] = useState({})
    const [search, setSearch] = useState('')

    searchBooks = query => {
        API.search(query)
          .then(res => this.setState({ result: res.data }))
          .catch(err => console.log(err));
      };

    return()
}