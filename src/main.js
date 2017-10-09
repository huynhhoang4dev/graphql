import cluster from 'cluster'
import os from 'os'
import express from 'express'

import coffeRouter from './routes/coffe'


const PORT = 8000

const numCPUs = os.cpus().length

import Coffe_Shop_Model from './model/coffe/shop.Model'


if(cluster.isMaster) {
  console.log(`Processing on  ${process.pid}`)
  for(let i=0;i<numCPUs;i++) {
    cluster.fork()
  }

  cluster.on('online', (worker) => {
    console.log(`Worker: ${worker.process.pid} is online`)
  })

  cluster.on('exit', (worker, code, signal) => {
    console.log(`Worker: ${worker.process.pid} died with code: ${code} and signal: ${signal}`)
    console.log('Starting a new worker')
    cluster.fork()
  })

} else {

  let app = express()

  //Routing
  app.use('/coffe', coffeRouter)


  app.get('/', (req, res) => {
  
    Coffe_Shop_Model.find((err, data) => {
      if(err) {
        res.send(err)
      }
      res.send(data)
    })
  })

  app.listen(PORT, () => {
    console.log(`Server was established on PORT: ${PORT} on Worker ID: ${cluster.worker.id}, Process ID:${process.pid} `)
  })

}


/**
 * Communication between Master and Workers
 */


 /**
  * Zero Down-Time
    Keep 2 points
    1. Master process runs the whole time. Only workers are terminated and restarted
    2. Notify the master process somehow that it needs to restart workers(including a user input or watching the files for changes)

  */

function restartWorkers() {
  let workerIDs = []

  // for(wid in cluster.workers) {
  //   workerIDs.push(wid)
  // }

  console.log(workerIDs)

  // workerIDs.forEach((wid) => {
  //   cluster.workers[wid].send({
  //     text: 'shutdown',
  //     from: 'master'
  //   })

  //   setTimeout(() => {
  //     if(cluster.workers[wid]) {
  //       cluster.workers[wid].kill('SIGKILL')
  //     }
  //   }, 500)
  // })
}

//restartWorkers()
