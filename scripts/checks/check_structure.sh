#!/bin/bash
# ============================================================
# check_structure.sh
# Comprova que existeixin les carpetes obligatòries del projecte
# ============================================================

ERRORS=0

check_dir() {
  if [ -d "$1" ]; then
    echo "✅ Carpeta trobada: $1"
  else
    echo "❌ Carpeta no trobada: $1"
    ERRORS=$((ERRORS + 1))
  fi
}

# Carpetes obligatòries
check_dir "src/components"
check_dir "src/pages"
check_dir "src/hooks"

# Fitxers obligatoris
if [ -f "src/App.jsx" ] || [ -f "src/App.tsx" ]; then
  echo "✅ App.jsx / App.tsx trobat"
else
  echo "❌ Falta src/App.jsx o src/App.tsx"
  ERRORS=$((ERRORS + 1))
fi

if [ -f "src/main.jsx" ] || [ -f "src/main.tsx" ]; then
  echo "✅ main.jsx / main.tsx trobat"
else
  echo "❌ Falta src/main.jsx o src/main.tsx"
  ERRORS=$((ERRORS + 1))
fi

echo ""
echo "--- Resultat ---"
if [ $ERRORS -eq 0 ]; then
  echo "OK - Estructura de carpetes correcta"
  exit 0
else
  echo "ERRORS: $ERRORS elements obligatoris no trobats"
  exit 1
fi
