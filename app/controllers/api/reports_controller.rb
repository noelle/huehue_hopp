class Api::ReportsController < ApiController
  def index
    render json: ReportSerializer.serialize_many(Report.all)
  end

  def create
    report = Report.create(report_params)
    render json: ReportSerializer.new(report).serialize, status: :created
  end

  private

  def report_params
    params.require(:report).permit(:horse_name, :date)
  end
end
