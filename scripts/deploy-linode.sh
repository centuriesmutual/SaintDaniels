#!/usr/bin/env bash
# Run on the Linode as root: bash scripts/deploy-linode.sh
# If SSH from your PC fails, use: Linode Cloud -> your instance -> Launch LISH console
set -euo pipefail

REPO_URL="${REPO_URL:-https://github.com/centuriesmutual/SaintDaniels.git}"
APP_DIR="${APP_DIR:-/opt/saintdaniels}"

export DEBIAN_FRONTEND=noninteractive

if ! command -v docker >/dev/null 2>&1; then
  curl -fsSL https://get.docker.com | sh
  systemctl enable --now docker
fi

apt-get update -qq
apt-get install -y git

if [[ -d "$APP_DIR/.git" ]]; then
  git -C "$APP_DIR" pull --ff-only
else
  rm -rf "$APP_DIR"
  mkdir -p "$(dirname "$APP_DIR")"
  git clone "$REPO_URL" "$APP_DIR"
fi

cd "$APP_DIR"

if [[ ! -f .env ]]; then
  cp .env.production.example .env
  echo "Note: edit $APP_DIR/.env with real secrets when ready (nano $APP_DIR/.env && docker compose up -d)."
fi

docker compose build
docker compose up -d

echo "Local health check:"
curl -sS "http://127.0.0.1:3000/api/health" || true
echo ""
