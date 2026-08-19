#!/bin/bash
# Removes asset files that are no longer referenced by the site.
#
# Two of these are urgent. cis-pi-board.png and cis-quality-board.png are
# unredacted screenshots of the Jira idea board and the field-defect board.
# They are not linked from any page, but they ARE deployed, which means anyone
# who guesses the URL can fetch them today:
#   https://aineshl.github.io/portfolio/assets/cis-pi-board.png
#   https://aineshl.github.io/portfolio/assets/cis-quality-board.png
# Delete them here AND make sure the deletion is pushed to GitHub Pages.
#
# Run from inside the portfolio folder:  bash cleanup-old-assets.sh

set -e
cd "$(dirname "$0")/assets"

# Proprietary. Remove first.
rm -f cis-pi-board.png cis-quality-board.png

# Superseded by redacted or better-cropped versions.
rm -f cis-roadmap.png fcs-dashboard.png prod-db-projects.png fcs-area-detail.png

# Never referenced by any page.
rm -f cis-velocity.png cis-approval-flow.png cis-backlog.png cis-eol.png cis-feedback-template.png \
      cis-npi.png prod-db-devices.png fcs-magicpatterns.png hero-headline.png \
      cgas-probe-1.jpg cgas-probe-2.jpg

# Avatar kept. Nothing to do here.
# avatar.png kept by request

echo "Done. Remaining assets:"
ls -1
