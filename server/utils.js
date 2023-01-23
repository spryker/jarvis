import {
  complement,
  drop,
  isNil,
  nth,
  split
} from 'ramda'

// This function does some IO
// log :: a -> a
export function log (content) {
  console.log(...arguments)
  return content
}

// This function does some IO
// cleanNodeInput :: [string] -> [string]
export function cleanNodeInput (args) {
  return drop(2, args)
}

export const isNotNil = complement(isNil)

function semVer (index, version) {
  return Number(nth(index, split('.', version)))
}

const semVerMajor = version => semVer(0, version)

const semVerMinor = version => semVer(1, version)

const semVerPatched = version => semVer(2, version)

export function versionToNumber (version) {
  const major = semVerMajor(version) * 1000000
  const minor = semVerMinor(version) * 1000
  const patch = semVerPatched(version)

  return major + minor + patch
}
