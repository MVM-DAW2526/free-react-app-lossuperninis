#!/bin/bash
# ============================================================
# check_api.sh
# Comprova que el projecte faci crides a una API externa
# Cerca ús de fetch()
# ============================================================

FETCH_COUNT=$(grep -r "fetch(" src/ --include="*.js" --include="*.jsx" --include="*.ts" --include="*.tsx" 2>/dev/null | grep -v "//.*fetch(" | wc -l)

TOTAL=$((FETCH_COUNT + AXIOS_COUNT))

echo "Crides fetch() trobades: $FETCH_COUNT"
echo "Crides axios. trobades: $AXIOS_COUNT"
echo "Ús de async/await al codi: $ASYNC_COUNT"
echo ""

# Mostrar on es fan les crides
if [ "$FETCH_COUNT" -gt 0 ]; then
  echo "Fitxers amb fetch():"
  grep -rl "fetch(" src/ --include="*.js" --include="*.jsx" --include="*.ts" --include="*.tsx" 2>/dev/null | while read f; do
    echo "  - $f"
  done
fi

if [ "$AXIOS_COUNT" -gt 0 ]; then
  echo "Fitxers amb axios:"
  grep -rl "axios\." src/ --include="*.js" --include="*.jsx" --include="*.ts" --include="*.tsx" 2>/dev/null | while read f; do
    echo "  - $f"
  done
fi
echo ""

if [ "$TOTAL" -ge 1 ]; then
  echo "OK - Crida a API externa detectada"
  exit 0
else
  echo "INSUFICIENT - No s'han detectat crides a API (fetch o axios)"
  echo "Assegureu-vos de fer crides HTTP a una API REST en algun component o hook"
  exit 1
fi
