const app = "I don't do much."

function destructivelyAppendKitten(name){
  kittens.push(name)
  return kittens
}

function destructivelyPrependKitten(name){
  kittens.unshift(name)
  return kittens
}

function destructivelyRemoveLastKitten(){
  kittens.pop()
  return kittens
}

function destructivelyRemoveFirstKitten(){
  kittens.shift()
  return kittens
}

function appendKitten(name){
  var kite = [...kittens, name]
  return kite
}

function prependKitten(name){
  var kite = [name, ...kittens]
  return kite
}

function removeLastKitten(){
  var kite = kittens.slice(0, kittens.length - 1)
  return kite
}

function removeFirstKitten(){
  var kite = kittens.slice(1, kittens.length)
  return kite
}
