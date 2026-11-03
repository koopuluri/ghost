#!/bin/zsh
set -eu
scene_tools_dir="$(cd -- "$(dirname -- "$0")" && pwd -P)"
exec /Applications/Blender.app/Contents/MacOS/Blender \
  "$scene_tools_dir/../../assets/personhood-v3.blend" \
  --python "$scene_tools_dir/controls.py"
