#!/bin/bash
# ============================================================
# check_components.sh
# Comprova que hi hagi almenys 3 components JSX/TSX a src/components/
# ============================================================

MIN_COMPONENTS=3

if [ ! -d "src/components" ]; then
  echo "❌ La carpeta src/components no existeix"
  exit 1
fi

# Cerca fitxers JSX/TSX que comencin per majúscula (convenció de components React)
COUNT=$(find src/components -name "*.jsx" -o -name "*.tsx" 2>/dev/null | wc -l)
echo "Components JSX/TSX trobats a src/components/: $COUNT"

# Llista els fitxers trobats
echo ""
echo "Fitxers detectats:"
find src/components -name "*.jsx" -o -name "*.tsx" 2>/dev/null | while read f; do
  echo "  - $f"
done
echo ""

if [ "$COUNT" -ge "$MIN_COMPONENTS" ]; then
  echo "OK - $COUNT components >= $MIN_COMPONENTS requerits"
  exit 0
else
  echo "INSUFICIENT - Calen almenys $MIN_COMPONENTS components JSX/TSX a src/components/ (trobats: $COUNT)"
  exit 1
fi
