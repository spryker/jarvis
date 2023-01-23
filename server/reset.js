import { log } from './utils.js'
import { updateConfigFile } from './file-system.js'

const resetObject = {
  lastCallToReleaseApp: null,
  previousProjects: [],
  lastProjectUsed: null,
  currentVersion: null
}

updateConfigFile(resetObject)
log('I have cleaned your local configuration. To use my services again please run -> node jarvis.js <path to your spryker project folder>')
