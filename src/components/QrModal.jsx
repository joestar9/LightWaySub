import PropTypes from "prop-types";
import QRCode from "react-qr-code";
import { handleCopyToClipboard } from "../utils/Helper";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Button } from "./ui/button";
import { Copy } from "lucide-react";
import { t } from "../utils/translations";

const QrModal = ({ open, handleClose, title, link }) => {
  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between">
            <span>{title}</span>
          </DialogTitle>
        </DialogHeader>

        <div className="flex flex-col items-center space-y-4">
          <div className="p-4 border rounded-lg bg-background">
            <QRCode
              value={link}
              cursor="pointer"
              bgColor="transparent"
              fgColor="currentColor"
              className="w-48 h-48"
              onClick={() => handleCopyToClipboard(link)}
            />
          </div>

          <Button
            onClick={() => handleCopyToClipboard(link)}
            className="w-full"
            variant="outline"
          >
            <Copy className="h-4 w-4 me-2" />
            {t("copyLink")}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

QrModal.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default QrModal;
