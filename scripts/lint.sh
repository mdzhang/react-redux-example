#!/usr/bin/env bash

# A script wrapping eslint that can be used by pre-commit to lint only select files
# e.g. files changed during a commit

set -euo pipefail

scripts_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
base_dir="$(dirname "${scripts_dir}")"

# Lint provided files (relative to base directory) or base directory
FILES=${@:-$base_dir}

eslint ${FILES} --ext .js --ext .jsx