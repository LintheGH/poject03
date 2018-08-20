import React from 'react'
import http from './http'
import event from './event'
React.Component.prototype.$http = http
React.Component.prototype.$event = event