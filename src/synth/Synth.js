import { scale } from '../constants/scale'
const Tone = require('tone')

const getTransport = () => {
  return Tone.Transport
}

class Synth {
  constructor (callback, samples = 'audio/marimba/') {
    this.sampler = new Tone.Sampler(scale, callback, samples)
    this.sampler.toMaster()
    this.setVolume()
  }

  setVolume (volume = -20) {
    this.sampler.volume.setValueAtTime(volume, 0)
  }

  toggle () {
    getTransport().toggle()
  }

  repeat (callback, timing = '16n') {
    this.timing = timing
    getTransport().scheduleRepeat(callback, timing)
  }

  playNote (note, time, timing = '16n') {
    this.sampler.triggerAttackRelease(note, this.timing || timing, time)
  }

  setBPM (bpm = 120) {
    getTransport().bpm.value = bpm
  }
}

export default Synth
