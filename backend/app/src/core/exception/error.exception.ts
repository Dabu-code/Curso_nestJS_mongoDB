import { HttpException, HttpStatus, Logger, NotFoundException, BadRequestException, UnauthorizedException } from '@nestjs/common';



export function errorException(description: string, status: HttpStatus, logger: Logger) {
    logger.error(`status: ${status} -  description: ${description}`);
    let message: string = "En este momento, el servicio no está disponible. Nuestro equipo está trabajando para solucionar el problema. Por favor, inténtelo más tarde.";
    switch (status) {
        case 400:
            message = "Oops,La solicitud que has enviado no es válida. Por favor, verifica la información y/o vuelve a intentarlo.";
            throw new BadRequestException(message, { description });
        case 401:
            message = "Acceso no autorizado. Asegúrese de tener las credenciales correctas y/o vuelva a intentarlo.";
            throw new UnauthorizedException(message, { description });
        case 404:
            message = "Los datos solicitados no han sido encontrados. Por favor, verifique la información proporcionada y/o vuelva a intentarlo.";
            throw new NotFoundException(message, { description });
        case 422:
            message = "No se pueden procesar los datos enviados. Por favor, verifique la información proporcionada y/o vuelva a intentarlo.";
            throw new NotFoundException(message, { description });
        default:
            throw new HttpException(message, status);
    }
}



export const MessageCrudError = {
    find: "No existe información en la base de datos.",
    create: "Error al intetar insertar el registro en la base de datos.",
    update: "Error al intetar actualizar el registro en la base de datos.",
    delete: "Error al intetar eliminar el registro en la base de datos.",
}