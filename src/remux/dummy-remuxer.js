/**
 * dummy remuxer
*/

class DummyRemuxer {
  constructor (observer) {
    this.observer = observer;
  }

  destroy () {
  }

  resetInitSegment () {
  }

  resetTimeStamp () {
  }

  remux (audioTrack, videoTrack, id3Track, textTrack, timeOffset) {
    this._remuxAACSamples(audioTrack, timeOffset);
    this._remuxAVCSamples(videoTrack, timeOffset);
    this._remuxID3Samples(id3Track, timeOffset);
    this._remuxTextSamples(textTrack, timeOffset);
  }

  _remuxAVCSamples (track, timeOffset) {
    let avcSample; let unit;
    // loop through track.samples
    while (track.samples.length) {
      avcSample = track.samples.shift();
      // loop through AVC sample NALUs
      while (avcSample.units.length) {
        unit = avcSample.units.shift();
      }
    }
    // please lint
    timeOffset = timeOffset;
  }

  _remuxAACSamples (track, timeOffset) {
    let aacSample; let unit;
    // loop through track.samples
    while (track.samples.length) {
      aacSample = track.samples.shift();
      unit = aacSample.unit;
    }
    // please lint
    timeOffset = timeOffset;
  }

  _remuxID3Samples (track, timeOffset) {
    let id3Sample; let unit;
    // loop through track.samples
    while (track.samples.length) {
      id3Sample = track.samples.shift();
      unit = id3Sample.unit;
    }
    // please lint
    timeOffset = timeOffset;
  }

  _remuxTextSamples (track, timeOffset) {
    let textSample; let bytes;
    // loop through track.samples
    while (track.samples.length) {
      textSample = track.samples.shift();
      bytes = textSample.bytes;
    }
    // please lint
    timeOffset = timeOffset;
  }
}

export default DummyRemuxer;
